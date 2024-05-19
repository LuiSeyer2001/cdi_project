import PocketBase from 'pocketbase'
const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URI)
export default pb
