const {Order} = require('../models/order')
const {Transaksi} = require('../models/transaksi')

const getAlldata = async(req,res,next)=>{
    try {
        const [alldataOrders]= await Order.getAllData()
        res.status(200).json({data: alldataOrders})
    } catch (error) {
        res.status(500).json({message:"Failed"})      
    }
}

const createOrders = async (req,res,next) =>{
    try {

        const kode_transaksi = "D0" + Date.now()
        const createTransaction = await Transaksi.createTransaksi(kode_transaksi)
        console.log(createTransaction)
        
        if(createTransaction) {
            const getlastData = await Transaksi.getTopdata()
            if(getlastData !== null){
                const order = {
                    nama_Barang : req.body.nama_Barang,
                    keterangan : req.body.keterangan,
                    jumlah : req.body.jumlah,
                    nama : req.body.nama,
                    alamat : req.body.alamat,
                    tanggal_pemesanan : req.body.tanggal_pemesanan,
                    id_kode_transaksi : getlastData[0]
        
                };
                const createOrder = await Order.createOrder(order)
                if( createOrder !== null) {
                    res.status(201).json({
                        data: order,
                        Message: 'Success Order - Transaction Code - ' + getlastData[1]
                    })
                }
            }
            
        }else{
            res.status(500).json({message:"Failed"})  
        }
    } catch (error) {
        res.status(500).json({message:"Failed"})  
    }   
}


module.exports = {
    getAlldata,
    createOrders
}