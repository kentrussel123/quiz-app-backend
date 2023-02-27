import * as mongoose from 'mongoose';


export async function connect() {
    await mongoose.connect('mongodb://localhost:27017/quiz-db', { useNewUrlParser: true } as any,(err)=>{
        if (err) {
            console.log('Failed to connect to database:', err);
            return;
        }
        console.log('Connected to database successfully!');

    });
}
