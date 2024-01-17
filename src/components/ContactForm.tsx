// import { useSubmit } from 'react-router-dom'
import Button from './Button'
import Input from "./Input"
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseName, chooseAddress, chooseEmail, choosePhone } from '../redux/slices/RootSlice';


// interface

interface ContactFormProps {
    id?: string,
}
const  ContactForm = (props:ContactFormProps) => {
    const { register, handleSubmit} = useForm({});
    const dispatch= useDispatch();
    const store = useStore();

const onSubmit = async (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    if (props.id) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data } ${ props.id }`)
        setTimeout(() => {window.location.reload()}, 1000)
        event.target.reset()
    } else {
        // use dispatch to update our state in our store
        dispatch(chooseName(data.name));
        dispatch(chooseEmail(data.email));
        dispatch(choosePhone(data.phone_number));
        dispatch(chooseAddress(data.address));

        const result =  await server_calls.create(store.getState());
        console.log(result)
        setTimeout( () => {window.location.reload()}, 10000)
    }
}


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Contact Name</label>
                <Input {...register('name')} name='name' placeholder="Name"/>
            </div>
            <div>
                <label htmlFor="email">Contact Email</label>
                <Input {...register('email')} name='email' placeholder="Email"/>
            </div>
            <div>
                <label htmlFor="phone_number">Contact Phone Number</label>
                <Input {...register("phone_number")} name='phone_number' placeholder="Phone Number"/>
            </div>
            <div>
                <label htmlFor="address">Contact Address</label>
                <Input {...register('address')} name='address' placeholder="Address"/>
            </div>
            <div className="flex p-1">
                <Button
                 className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                 >
                    Submit
                </Button>
            </div>
        </form>
    </div>
  )
}


export default ContactForm