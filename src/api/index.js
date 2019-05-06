/**
 * Created by fanjing on 2019/5/5.
 */
import { get } from './apis'

const getSeller = get('/api/seller')
const getGoods = get('/api/seller')
const getRatings = get('/api/ratings')

export {
  getSeller,
  getGoods,
  getRatings
}
