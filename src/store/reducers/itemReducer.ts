import { Reducer } from 'redux';
import { ActionTypes } from '../../types/ActionTypes';

export interface ItemReducer<T = {}> extends Reducer<T, ActionTypes> { }
