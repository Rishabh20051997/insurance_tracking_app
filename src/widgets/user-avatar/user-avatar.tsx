import React, {ReactElement} from 'react';
import useAvatarController from './user-avatar-controller';

import UserAvatarView from './user-avatar-view';

/**
 *
 * @param {string} props.first_name
 * @param {string} props.last_name
 * @param {number} props.size
 * @returns  User Avatar
 */

const UserAvatar: React.FC<IUserAvatarProps> = (props): ReactElement => {
  const controller = useAvatarController(props);

  return <UserAvatarView {...controller} />;
};

export default UserAvatar;
