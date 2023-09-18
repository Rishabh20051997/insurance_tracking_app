import colors from "@resources/colors"
import { FONT_TYPE } from "@theme/font"
import UICard from "@widgets/ui-card"
import UIRow from "@widgets/ui-row"
import UIText from "@widgets/ui-text"
import UserAvatar from "@widgets/user-avatar/user-avatar"
import { memo } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

interface IEmployeeCardProps {
    dataItem: IEmployeeItem
    onEditButtonPressed: (dataItem: IEmployeeItem) => void
    onDeleteButtonPressed: (dataItem: IEmployeeItem) => void
}

const EmployeeCard = ({
    dataItem,
    onEditButtonPressed,
    onDeleteButtonPressed
}: IEmployeeCardProps) => {

    const { firstName, lastName } = dataItem
    return <UICard style={styles.cardContainer}>
        <UIRow style={styles.upperContainer}>
            <UserAvatar
                first_name={firstName}
                last_name={lastName}
                size={50}
            />
            <UIText
                FontType={FONT_TYPE.LABEL_MEDIUM}
                text={firstName + ' ' + lastName}
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.userNameText}
            />
        </UIRow>
        <UIRow style={styles.lowerRow}>
            <TouchableOpacity
                onPress={() => onEditButtonPressed(dataItem)}
                style={styles.btnContainer}>
                <UIText
                    FontType={FONT_TYPE.LABEL_MEDIUM}
                    text={'Edit'}
                    color={colors.gray_scale.white}
                    textAlign={'center'}
                    style={styles.btnText}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onDeleteButtonPressed(dataItem)}
                style={styles.btnContainer}>
                <UIText
                    FontType={FONT_TYPE.LABEL_MEDIUM}
                    text={'Delete'}
                    textAlign={'center'}
                    color={colors.gray_scale.white}
                    style={styles.btnText}
                />
            </TouchableOpacity>
        </UIRow>

    </UICard>
}

const styles = StyleSheet.create({
    cardContainer: { margin: 6, padding: 6 },
    upperContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
    userNameText: { flexShrink: 1, paddingHorizontal: 10 },
    lowerRow: { marginVertical: 6 },
    btnContainer: { flex: 1, marginHorizontal: 5 },
    btnText: { flex: 1, backgroundColor: colors.primary.cardinal, borderRadius: 6, padding: 6 }


})

export default EmployeeCard