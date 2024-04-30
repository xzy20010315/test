import mitt from 'mitt'
 
type Events = {
  sendMsg: string
  sendNum: number
  toastMsg : string
  goRegisterMsg : string
  loginSuccessMsg: string
  registerSuccessMsg: string
  lrMsg: string
  mainMsg: string
  hobbyMsg: string
  infoChanMsg: string
}
 
const bus = mitt<Events>()
export default bus