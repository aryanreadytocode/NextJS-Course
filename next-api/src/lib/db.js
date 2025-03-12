const {usernm, password} = process.env;
export const connectionStr = "mongodb+srv://"+usernm+":"+password+"@cluster0.xthcr.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"