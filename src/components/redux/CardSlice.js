import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { AddItem, RemoveItem } from "../utill/config";

const initialState = {
    items: [],
    totalItems: 0
}

const CardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;

            // Check if the item is already in the cart
            const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                // If item is already in the cart, increase the quantity
                existingItem.quantity += 1;
                toast.success('Increased item quantity in cart!');
            } else {
                // If item is not in the cart, add it with a quantity of 1
                state.items.push({ ...item, quantity: 1 });
                state.totalItems += 1;
                toast.success(AddItem);
            }
        },
        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                state.totalItems -= item.quantity; // Decrease totalItems count by the quantity of the item being removed
                state.items.splice(itemIndex, 1); // Remove the item from the array
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        clearCart: (state) => {   // ✅ New reducer to clear the cart
            state.items = [];
            state.totalItems = 0;
            toast.success("Order placed successfully! Cart cleared.");
        }
    }
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = CardSlice.actions;
export default CardSlice.reducer;