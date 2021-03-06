import {useState} from "react";
import PlacesAutocomplete, {
  geocodeByAddress, 
  getLatLng 
} from "react-places-autocomplete";

export default function Address() {
  const [address, setAddress] = useState("")
  const [coordinates, setCoordinates] = useState({lat : null, lng: null})

  const handleSelect = async value => {
    const results = await geocodeByAddress(value) //we will get back geocode(s) of the address(es) from selection (but too much info)
    const latLng = await getLatLng(results[0]) //we will get Lat & Lng 
    setAddress(value)
    setCoordinates(latLng) //set Lat & Lng
  }; //recieves of address of selection 

  return (
    <div>
      <PlacesAutocomplete //needs a render prop function 
        value = {address} //current value of whatever user is typing into input
        onChange = {setAddress} //called whenever input changes
        onSelect = {handleSelect} //called when user selects one of the dropdown options 
      > 
       {/*this render prop function needs a couple of props*/}
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
            <input {...getInputProps({placeholder: "Type Address"})}></input>  {/*renders input to screen*/}
 
            <div>  {/*div that displays suggestions */}
              {loading ? <div>...loading</div> : null} 
              {/* (1)each suggestion is mapped as multiple drop down divs containing the description 
                  (2) customized based on suggestion's activity status
                  (3) As we render each suggestion, we need to generate props which is generated by getSuggestionItemsProps
                  (3) suggestion we want to generate props for, any addition props we want to attach to prop being rendered
              */}
              { suggestions.map( suggestion => { 
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                  }
                  return (
                    <div {...getSuggestionItemProps(suggestion, {style})}>
                      {suggestion.description}
                    </div>
                  )

              })}
            </div>

          </div>
          )}
      </PlacesAutocomplete>
    </div>
  );
}


