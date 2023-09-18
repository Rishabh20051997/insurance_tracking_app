enum HOME_SCREEN_ITEM_KEYS {
  NEW_TRACK = 'newTrack',
  PENDING_PAYMENT = 'pendingPayment',
  UPCOMING_INSURANCE = 'upcomingInsurance',
  INSURANCE_LIST = 'insuranceList',
  GENERATE_XCEL = 'generateExcel',
  TRACK_PAYMENT_RECORD = 'trackPaymentRecord',
  PAYMENT_OUT = 'paymentOut',
}

const HOME_SCREEN_ITEM_LIST = [
  {
    key: HOME_SCREEN_ITEM_KEYS.NEW_TRACK,
    title: 'Create New Track',
    icon: '',
  },
  {
    key: HOME_SCREEN_ITEM_KEYS.PENDING_PAYMENT,
    title: 'Pending Payment',
    icon: '',
  },
  {
    key: HOME_SCREEN_ITEM_KEYS.UPCOMING_INSURANCE,
    title: 'Upcoming Insurance',
    icon: '',
  },
  {
    key: HOME_SCREEN_ITEM_KEYS.INSURANCE_LIST,
    title: 'Insurance List',
    icon: '',
  },
  {
    key: HOME_SCREEN_ITEM_KEYS.GENERATE_XCEL,
    title: 'Generate Excel',
    icon: '',
  },
  {
    key: HOME_SCREEN_ITEM_KEYS.TRACK_PAYMENT_RECORD,
    title: 'Track Payment Record',
    icon: '',
  },
  {
    key: HOME_SCREEN_ITEM_KEYS.PAYMENT_OUT,
    title: 'Payment Out',
    icon: '',
  },
];

export {HOME_SCREEN_ITEM_LIST, HOME_SCREEN_ITEM_KEYS};
