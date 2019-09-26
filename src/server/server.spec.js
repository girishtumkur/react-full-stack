import { addNewTask , updateTask} from "./server";

(async function myFunc() {
    //await addNewTask({ name: "my Task", Id: "123456" });
    await updateTask({ name: "my Task- UPDATED...$", Id: "12345" });
})();

