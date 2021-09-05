const db_connection = require('../db.js')


class Order {
    constructor(nama_Barang, keterangan, jumlah, nama, alamat, tanggal_pemesanan) {
       this.nama_Barang = nama_Barang,
       this.keterangan = keterangan,
       this.jumlah = jumlah,
       this.nama = nama,
       this.alamat = alamat,
       this.tanggal_pemesanan = tanggal_pemesanan
       this.id_kode_transaksi = id_kode_transaksi
    }

    static getAllData = async () =>{
        const data = await db_connection.query('SELECT * FROM orders');
        return data;
    }

    static  createOrder = async  (order) =>{
        const data = db_connection.execute('INSERT INTO orders (nama_Barang,keterangan,jumlah,nama,alamat,tanggal_Pemesanan,id_kode_transaksi) VALUES (?,?,?,?,?,?,?)',
         [order.nama_Barang, order.keterangan, order.jumlah, order.nama, order.alamat, order.tanggal_pemesanan, order.id_kode_transaksi]);
         if(data !== null){
             return true
         }else{
             return false
         }
    }

  }


module.exports = {Order}