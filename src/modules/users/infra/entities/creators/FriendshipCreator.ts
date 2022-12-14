import Creator from "@shared/infra/entities/creators/Creator";

import Friendship, { ICreateFriendshipDTO } from "../Friendship";

export default class FriendshipCreator extends Creator {
    createEntity(info: ICreateFriendshipDTO): Friendship {
        return new Friendship(info);
    }
}
