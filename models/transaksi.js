const db_connection = require('../db.js')


class Transaksi {
    constructor(kode_transaksi) {
        this.kode_transaksi = kode_transaksi
    }

    static  createTransaksi = async  (kode_transaksi) =>{
        const data = db_connection.execute('INSERT INTO transaksi (kode_transaksi) VALUES (?)', [kode_transaksi]);
        if(data !== null){
            return true
        }else {
            return false
        }
    }

    static getTopdata = async ()=>{
        const data = await db_connection.query('SELECT * FROM transaksi ORDER BY id DESC LIMIT 1');
        const {id, kode_transaksi} = data[0][0]
        const lastData = [id,kode_transaksi]
        return lastData
    }

  }


module.exports = {Transaksi}