
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.url;
const supaKey = process.env.key;

const supabase = createClient(supabaseUrl, supaKey);

module.exports =  supabase ;