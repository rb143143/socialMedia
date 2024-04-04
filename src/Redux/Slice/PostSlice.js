
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url, com_url, log_url, post_url, reg_url } from "../../Components/Api/Api";


let api_url_reg = base_url + reg_url
console.log(api_url_reg);

let api_url_log = base_url + log_url;
console.log(api_url_log);

let api_url = base_url + post_url
console.log(api_url);

let api_url_com = base_url + com_url
console.log(api_url_com);


export const fetchReg = createAsyncThunk('register/fetchReg', async(user)=>{
    let res = await axios.post(api_url_reg,user)
    .then((res)=>{
        console.log('reg form axios response is:',res.data);
        localStorage.setItem('signup_details',JSON.stringify(res.data));
        // alert('registration form data submitted')
    })
    .catch((err)=> console.log('registration form data submitted',err))
    return res?.data
})


export const fetchLog = createAsyncThunk('login/fetchLog', async(data)=>{
    let res = await axios.post(api_url_log,data)
    .then((res)=>{
        console.log('log form axios response is:',res.data);
        localStorage.setItem('login_details',JSON.stringify(res.data))
    })
    .catch((err)=> console.log('registration form data submitted',err))
    return res?.data
})


export const fetchView = createAsyncThunk('view/fetchView',async()=>{
    let res = await axios.get(api_url)
    console.log('axios response for view page:',res.data);
    localStorage.setItem('user-post',JSON.stringify(res.data));
    return res?.data;
})


export const fetchAdd = createAsyncThunk('add/fetchAdd',async(product)=>{
    let res = await axios.post(api_url,product)
    console.log('axios response for add page:',res.data);
    return res?.data;
})

export const fetchDelete = createAsyncThunk('delete/fetchDelete',async(id)=>{
    let res = await axios.delete(`${api_url}/${id}`)
    // console.log('axios response for post api is:',res.data);
    return res?.data;
})


export let fetchEdit = createAsyncThunk('edit/fetchEdit',async(eid)=>{
    let res = await axios.get(`${api_url}/${eid}`)
    // console.log('axios response for Edit page:',res.data);
    return res?.data;
})


export let fetchUpdate = createAsyncThunk('update/fetchUpdate ',async(obj)=>{
    let res = await axios.put(`${api_url}/${obj.eid}`,obj)
    console.log('axios response for update page:',res.data);
    return res?.data;
})

export const fetchComment = createAsyncThunk('addcomment/fetchComment',async(socialpost)=>{
    let res = await axios.post(api_url_com,socialpost)
    console.log('axios response for add comments:',res.data);
    localStorage.setItem('user-comment',JSON.stringify(res.data));
    return res?.data;
})

export const fetchCommentView = createAsyncThunk('viewcomment/fetchCommentView',async()=>{
    let res = await axios.get(api_url_com)
    console.log('axios response for view comments:',res.data);
    return res?.data;
})


export const fetchCommentDelete = createAsyncThunk('deletecomment/fetchCommentDelete',async(id)=>{
    let res = await axios.delete(`${api_url_com}/${id}`)
    console.log('axios response for delete comments:',res.data);
    return res?.data;
})



let initial_Value = {
    isLoading : false,
    error: null,
    postValue: []
}

export const  PostSlice = createSlice({
    name:"posts",
    initialState:initial_Value ,
    extraReducers:(builder)=>{

        
         // Registration form

         builder.addCase(fetchReg.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchReg.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
        })

        builder.addCase(fetchReg.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
        })

        // Login form

        builder.addCase(fetchLog.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchLog.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
        })

        builder.addCase(fetchLog.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
        })

        // Crud View page

        builder.addCase(fetchView.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchView.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
        })

        builder.addCase(fetchView.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
        })

        // Crud add page

        builder.addCase(fetchAdd.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchAdd.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
        })

        builder.addCase(fetchAdd.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
        })


         // Crud add page

         builder.addCase(fetchDelete.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchDelete.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
        })

        builder.addCase(fetchDelete.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
        })

        //edit product data

        builder.addCase(fetchEdit.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchEdit.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
        })

        builder.addCase(fetchEdit.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
        })


        //update product data

        builder.addCase(fetchUpdate.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchUpdate.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
            console.log('fullfilled',action);
        })

        builder.addCase(fetchUpdate.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
            console.log('reject',action);
        })

        //add socialmedia comments

        builder.addCase(fetchComment.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchComment.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
        })

        builder.addCase(fetchComment.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
        })

        //view socialmedia comments

        builder.addCase(fetchCommentView.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchCommentView.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
        })

        builder.addCase(fetchCommentView.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
        })

        //delete socialmedia comments

        builder.addCase(fetchCommentDelete.pending, (state,action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchCommentDelete.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.postValue = action.payload;
            state.error = null
        })

        builder.addCase(fetchCommentDelete.rejected, (state,action)=>{
            state.isLoading = false;
            state.postValue = [];
            state.error = action.error.message
        })
    }
})

export default PostSlice.reducer;