
import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Theme from '../../../util/theme';
import Util from '../../../util/util';

export default class MianzePop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false,
            isHidden: true,
        }
    }
    render() {
        const { check, isHidden } = this.state;
        const { siteUrl, isrepeat, that } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.mask}></View>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>风险提示及免责声明确认书</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.body}>
                            <Text style={styles.text}>1、返利魔方仅为信息提供平台，返利魔方不参与用户在任何网贷平台出借交易的过程，也不接受、不触碰、不吸纳任何用户的出借资金。</Text>
                            <Text style={styles.text}>2、返利魔方仅提供各网贷平台的活动信息，不构成任何对该有活动的网贷平台(以下简称“活动平台”）的安全性的评价或出借建议。任何活动平台都存在不同程度的出借风险，用户应自行、谨慎评估各活动平台的风险，自行决策是否出借，并自行承担全部风险。</Text>
                            <Text style={styles.text}>3、活动平台如出现任何风险（包括但不局限于平台提现困难/逾期/倒闭/跑路等导致无法拿回本金的情况），返利魔方均不承担任何责任。</Text>
                            <Text style={styles.text}>4、用户通过返利魔方提供的信息或链接，最终在各活动平台进行出借、完成交易。返利魔方提供的信息存在滞后、出借回报率测算有误差等风险，用户应在活动平台出借前，仔细阅读活动平台公布的活动规则及相关协议，充分理解相关规则与协议后再决策进行出借。</Text>
                            <Text style={styles.text}>5、用户应合理、谨慎评估自己的风险承受能力，在自己的风险承受能力的范围内在活动平台进行出借。</Text>
                            <Text style={styles.text}>6、再次强调，网贷出借不是银行存款，具备一定风险性，存在出借本金无法收回的风险。任何风险由用户自行承担，返利魔方不承担任何责任。</Text>
                        </View>

                    </ScrollView>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.agreed} activeOpacity={0.8}
                            onPress={() => {
                                this.setState({
                                    check: !this.state.check,
                                    isHidden: true,
                                })
                            }}
                        >
                            <View style={[styles.checkBox, check ? styles.checkBoxGou : null]}>{check ? <Text style={styles.gou}>√</Text> : null}</View>
                            <Text style={styles.agreedText}>本人已充分阅读理解《风险提示及免责声明确认书》内容并愿意承担风险后果</Text>
                        </TouchableOpacity>
                        {
                            !check && !isHidden ?
                                <Text style={styles.errorText}>*请先阅读《风险提示及免责声明确认书》，如同意，请勾选</Text>
                                :
                                null
                        }

                        <TouchableOpacity style={[styles.btn, !check ? styles.disable : null]} activeOpacity={0.6}
                            onPress={() => {
                                if (check) {
                                    Util.Linked(siteUrl)
                                }
                                else {
                                    this.setState({
                                        isHidden: false,
                                    })
                                }

                            }}
                        >
                            <Text style={[styles.btnText, !check ? styles.disableText : null]}>同意并前往参加活动</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, styles.btnCancel]} activeOpacity={0.6}
                            onPress={() => {
                                that.setState({
                                    isHiddenMianze: true,
                                })
                            }}
                        >
                            <Text style={[styles.btnText, styles.btnCancelText]}>不同意</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: Theme.screenWidth,
        height: Theme.screenHeight,
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1002,
    },
    mask: {
        justifyContent: "center",
        backgroundColor: "#000",
        opacity: 0.4,
        position: "absolute",
        width: Theme.screenWidth,
        height: Theme.screenHeight,
        left: 0,
        top: 0,
    },
    content: {
        width: Theme.screenWidth * 0.8,
        height: Theme.screenHeight * 0.7,
        backgroundColor: '#fff',
        borderWidth: 5,
        borderColor: '#797979',
    },
    header: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#797979',
    },
    headerText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    body: {
        padding: 12,
    },
    text: {
        color: '#666',
        fontSize: 12,
        lineHeight: 20,
    },
    footer: {
        padding: 12,
    },
    agreed: {
        paddingLeft: 22,
        position: 'relative',
        flexDirection: 'row',
        marginBottom: 10,
    },
    agreedText: {
        fontSize: 12,
        color: '#666',
        lineHeight: 16,
    },
    checkBox: {
        position: 'absolute',
        left: 0,
        top: 3,
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gou: {
        fontSize: 11,
        color: '#fff',
        fontWeight: 'bold',
    },
    btn: {
        height: 35,
        backgroundColor: '#bbb',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66CCCC',
    },
    btnText: {
        fontSize: 14,
        color: '#fff',
    },
    btnCancel: {
        marginTop: 5,
        backgroundColor: '#f80000',
    },
    checkBoxGou: {
        backgroundColor: '#66CCCC',
        borderColor: '#66CCCC',
    },
    disable: {
        backgroundColor: '#bbb',
    },
    disableText: {
        color: '#666',
    },
    errorText: {
        paddingBottom: 8,
        color: '#E61C2C',
        fontSize: 12,
    },
})