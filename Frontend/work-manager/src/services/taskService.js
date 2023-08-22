import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task){
    const result=await httpAxios.post("/api/tasks",task).then((response)=> response.data);
    // console.log(result);
    return result;
}


export async function getTasksByUserId(userId){
    const result=await httpAxios.get(`/api/users/${userId}/tasks`).then((response)=> response.data);
    return result;
}