import ajax from './ajax'
import defaultUrl from '../utils/current';

export const reqNotes = () => ajax(defaultUrl + '/blog/get-note')

export const reqNote = (id) => ajax(defaultUrl + '/blog/get-note',{id},"POST")
