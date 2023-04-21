import React, { useCallback, useContext, useEffect, useState } from "react";
import { Alert, ToastAndroid } from "react-native";
import { url } from "./Address";
// import { AppContext, getStore } from "../Storage";

const useFetch = (domain,lazy = false,setBody = null, body = null) => {
  // const {auth} = useContext(AppContext)
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!lazy) {
      doFetch();
    }
  },[]);


  const doFetch = useCallback((_body = null) => {  
    if (lazy === true){
      setLoading(true)
    }else {
      setRefreshing(true)
    }
    fetch(url + domain,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${auth}`
      },
      body:_body !== null ? _body : body,
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          ToastAndroid.showWithGravity(
            "عدم ارتباط با سرور",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
        }
      })
      .then((response) => {
        if (typeof response !== "undefined") {
          setData(response);
        }else {
          console.log('response',response)
          setData([])
          setUpdate(!update)
        }
      })
      .catch((error) => {
        console.log("error2 :", error);
      })
      .finally(() => {
        setLoading(false);
        setRefreshing(false)
      });
  }, [setBody,update]);
  
  return {doFetch, data,loading,refreshing};
};

const FileFetch = async (image) => {
  let data = ''
  await fetch(Api + "guest/getfile", {
    method: "POST",
    body: image,
  })
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        ToastAndroid.showWithGravity(
          'عدم ارتباط با سرور',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        )
      }
    }).then(async response => {
      if (typeof response != 'undefined'){
         data = await response.data.name
      }else {
        console.log('response',response)
      }

    }).catch(error => {
      console.log('error',error)
    })

  return data;
}

export {
  useFetch,
  FileFetch,
}