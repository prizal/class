const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 function connect() {
   mongoose.connect('mongoose://localhost/my_database',{useNewUrlParser : true});
   return mongoose.connection;
 }

 connect()
 const Schema= mongoose.Schema;
 

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

Blog = mongoose.model('Blog',Blogpost);
const blog = new Blog({title:""})
