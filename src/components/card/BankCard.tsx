import React, { Component } from "react";
import { FlatList } from "react-native";
import _ from "lodash";
import { Account } from "../../types/types";
import { AccountList } from "../../screens/auth/BankConnect";
import AddBankCard from "./AddBankCard";
import BankRowCard from "./BankRowCard";
import Card from "./Card";

interface Props {
    onPressAdd: () => void;
    onPressBank: (account: Account) => void;
    accounts: Account[];
}

class BankCard extends Component<Props> {
    renderItem = ({ item }: { item: AccountList }) => {
        const { onPressAdd, onPressBank } = this.props;

        if (item.type === "add") {
            return <AddBankCard onPress={onPressAdd} />;
        } else {
            const { account } = item;
            if (account) {
                return (
                    <BankRowCard
                        institutionName={account.institution.institutionName}
                        accountMask={account.accountMask}
                        onPress={() => onPressBank(account)}
                        accountBalance={account.balance.availableBalance}
                        accountSubtype={account.accountSubtype}
                    />
                );
            }
        }
        return null;
    };

    keyExtractor = (item: AccountList, index: number) => {
        if (item.type === "add") {
            return String(index);
        } else {
            return item.account ? item.account.accountId : String(index);
        }
    };

    render() {
        const { accounts } = this.props;
        const accountLists: AccountList[] = _.map(accounts, account => {
            return {
                type: "account",
                account: account
            };
        });
        const addCell: AccountList = { type: "add" };
        accountLists.push(addCell);

        return (
            <Card containerStyle={{ marginBottom: 20, marginHorizontal: 10 }}>
                <FlatList
                    style={{ padding: 10, marginBottom: 10 }}
                    data={accountLists}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    showsVerticalScrollIndicator={false}
                />
            </Card>
        );
    }
}

export default BankCard;
