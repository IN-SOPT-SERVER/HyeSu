import { Member } from './member'
import { Food } from './food'

export interface Dinner {
    members: Member[],
    foods: Food[],
    shuffle: (<T extends Member|Food>(array: T[]) => T[]),
    organize: (members: Member[], foods: Food[]) => void,
}
