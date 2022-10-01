import { createSlice } from "@reduxjs/toolkit"
// import { useDispatch, useSelector } from "react-redux"

const initialState = {
    demoId: 0,
}

export const demo = createSlice({
    name: "demoId",
    initialState,
    reducers: {
        setDemoId: (state, action) => {
            state.demoId = action.payload
        }
    },
})

export const { setDemoId } = demo.actions

export default  demo.reducer

// function App() {
// 	const pizza = useSelector(state => state.pizza)
// 	const dispatch = useDispatch()
//
// 	return (
// 		<div>
// 			<h1>Pizza</h1>
// 			{
// 				pizza.toppings.map(topping => (
// 					<div key={topping}>{topping}</div>
// 				))
// 			}
// 			<button onClick={() => dispatch(addTopping("oni"))}>Add oni</button>
// 		</div>
// 	)
// }