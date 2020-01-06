

const activeCityReducer = (state =0, action) => {
  switch (action.type) {

        case "SELECTED":
            return state +1

        default:
            return state
    }
    console.log(state)
}


export default activeCityReducer;
