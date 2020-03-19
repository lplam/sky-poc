import axios from 'axios'

class API {
  getData = () => {
    return axios
      .get('https://back-end-services-soa.herokuapp.com/users')
      .then(function(response) {
          var data = response.data
          return data
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  GenKey = (data) => {
    return axios
      .post('https://back-end-services-soa.herokuapp.com/key-time-out',data)
      .then(res=>{
        return res.data;
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  forgotpassword = (data) => {
    return axios
      .post('https://back-end-services-soa.herokuapp.com/forgotpassword-time-out',data)
      .then(res=>{
        return res.data;
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  changepassword = (data) =>{
    return axios
    .post('https://back-end-services-soa.herokuapp.com/changepassword',data)
    .then(res=>{
      return res.data;
    })
    .catch(function(error) {
      console.log(error)
    })
  }


  getDataURL = (url) =>{
    return axios
      .get(url)
      .then(function(response) {
        if (response.status === 200 && response != null) {
          var data = response.data
          return data
        } else {
          throw new Error('Empty data')
        }
      })
      .catch(function(error) {
        console.log(error)
        return [] // Return empty array in case error response.
      })
  }

  postData = (data)=>{
    return axios
    .post('https://back-end-services-soa.herokuapp.com/users-time-out',data)
    .then(res=>{
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    out_of_date = ()=>{
    return axios
    .post('https://back-end-services-soa.herokuapp.com/check-out-of-date')
    .then(res=>{
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  SendMail = (data)=>{
    return axios
    .post("https://back-end-services-soa.herokuapp.com/send-mail",
    {
      code : data.code,
      email: data.email,
      contain: data.contain
    })
    .then(res=>{
      return res.data
    })
    .catch(function(err)
    {
      console.log(err);
    })
  }


  SendMailContacts = (data)=>{
    return axios
    .post("https://back-end-services-soa.herokuapp.com/send-mail-contacts",
    {
      email: data.email,
      from: data.from,
      content: data.content,
      name: data.name,
      phone: data.phone,
    })
    .then(res=>{
      return res.data;
    })
    .catch(function(err)
    {
      console.log(err);
    })
  }

  getKey = data=>{
    return axios
    .get(`https://back-end-services-soa.herokuapp.com/get-keys/${data.id}`)
    .then(res=>{
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    })
  }

  putdata = (data)=>{
    return axios
    .put(`https://back-end-services-soa.herokuapp.com/users`,data)
    .then(res=>{
      return res.data;
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  delkey = (id,data)=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/keys/${id}`,data)
    .then(res=>{
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    })
  }

  avatar = ()=>{
    return axios
    .get("https://back-end-services-soa.herokuapp.com/avatar")
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  facebook_google = (data)=>{
    return axios
    .post("https://back-end-services-soa.herokuapp.com/facebook_google",data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  login = (data)=>{
    return axios
    .post("https://back-end-services-soa.herokuapp.com/log-in",data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }




  check_public_key = (data)=>{
    return axios
    .post("https://back-end-services-soa.herokuapp.com/check-admin-public-key",data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  login_admin = (data)=>{
    return axios
    .post("https://back-end-services-soa.herokuapp.com/log-in-admin",data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }
  fbgglogin = (data)=>{
    return axios
    .post("https://back-end-services-soa.herokuapp.com/fb-gg-login",data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  getIDfacebook_google = (data)=>{
    return axios
    .get(`https://back-end-services-soa.herokuapp.com/facebook_google/${data.account}`)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  Recreatekey = (data)=>{
    return axios
    .post("https://back-end-services-soa.herokuapp.com/register-key-again-time-out",data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  Changekey = (data)=>{
    return axios
    .post("https://back-end-services-soa.herokuapp.com/change-key-value-time-out",data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  deluser = (data)=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/users-delete`,data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  admindelkey = (data)=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/keys-delete`,data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  getallmail = ()=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/mails`)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  getallkey = ()=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/keys`)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  deletemail = (data)=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/delete-mail`,data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })
  }

  deletlistemail = (data)=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/delete-mails`,data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })

    
  }

  readed = (data)=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/readed`,data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })

    
  }

  getemail = (data)=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/getmail`,data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })

    
  }

  sendreply = (data)=>{
    return axios
    .post(`https://back-end-services-soa.herokuapp.com/send-reply`,data)
    .then(res=>{
      return res.data
    })
    .catch(err=>{
      console.log(err);
    })

    
  }
}


export default API;