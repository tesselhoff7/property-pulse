"use server";

async function addProperty(formData) {
  console.log("add prperty action");
  console.log(formData.get("name"));
}

export default addProperty;
