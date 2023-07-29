import {
  firstCharactersOfFirstAndLastName,
  pickRandomColor,
} from '@helpers/removeInitialsFromName';

/**
 *
 * @param {IUserAvatarProps} props
 * @returns user avatar controller to handle background color and
 */
const useAvatarController = (props: IUserAvatarProps): IUserAvatarViewProps => {
  const NAME_INITIAL_REMOVE_REGEX = /(Mr|MR|Ms|Miss|Mrs|Dr|Sir)(\.?)\s/;

  // remove salutation before name
  const removeInitialsFromName = (name: string) => {
    const match = NAME_INITIAL_REMOVE_REGEX.exec(name);
    return match !== null ? name.replace(match[0], '') : name;
  };

  const finalName = removeInitialsFromName(
    props?.first_name + ' ' + props.last_name,
  );

  const backgroundColor = pickRandomColor(finalName);

  // avatar text -> first character of first and last name
  const avatarText = firstCharactersOfFirstAndLastName(finalName);

  return {
    backgroundColor,
    avatarText,
    size: props.size || 70,
  };
};

export default useAvatarController;
