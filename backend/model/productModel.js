const  supabase  = require('../config/supabaseClient');

exports.getAllProducts = async () => {
  try {
    const { data, error } = await supabase
    .from('products')
    .select("*");
    if (error)
      throw error
    
  
    return data;  
  } catch (err) {
    console.error('Error fetching products:', err.message);
    throw err;
  }
};

exports.insertProduct=async (productData)=>{
  try{
    const {data, error} = await supabase.from('products').insert([productData]).select('*')
    if (error) throw error;
    return data
  }catch(err){
    console.log("error insert", err.message)
  }
 
}

exports.updateProduct = async (id, productData)=>{
  try{
    const {data, error} = await supabase.from('products').update(productData).eq('id', id).select("*")
    if(error) throw error;
    return data
  }catch(err){
    console.log("error update", err.message)
  }
}

exports.deleteProduct = async (id)=>{
  try{
    const {data, error} = await supabase.from('products').delete().eq('id', id)
    if (error) throw error
    return data
  }catch(err){
    console.log("error deleteing the row tables ", err)
  }
}