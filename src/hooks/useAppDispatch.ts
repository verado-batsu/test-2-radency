import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/store'

type DispatchFunc = () => AppDispatch

export const useAppDispatch: DispatchFunc = useDispatch