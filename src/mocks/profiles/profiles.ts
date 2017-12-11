import { Profile } from "../../models/profile/profile.interface";

const userList: Profile[] = [
  {
    userName: 'jesper.dalsgaard',
    email: 'post@jdanet.dk',
    password: '1234',
    name: 'Jesper Dalsgaard',
    avatar: 'https://scontent.fbll1-1.fna.fbcdn.net/v/t1.0-9/12548921_10153825619927605_6357298594137224607_n.jpg?oh=36a4530391bed9e8e0aaab9c5876b7ab&oe=5AD3DEAB',
    phone: 23355159,
    address: 'Vædderens Kvarter 4, 6710 Esbjerg V'
  },
  {
    userName: 'duplo1978',
    email: 'duplo1978@live.dk',
    password: '1234',
    name: 'Henrik Sørensen',
    avatar: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/16387365_10210789958012510_7893351650655322898_n.jpg?oh=161637ed1b980918d50ff58e56cb79ec&oe=5A987014',
    phone: 21778181,
    address: 'Grunnetsgade 12B, 6600 Vejen'
  }
];

export const USER_LIST = userList;
