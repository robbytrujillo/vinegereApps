import { ReactElement, FormEvent } from 'react';
import ShowEye from '../assets/show-eye.svg';
import HideEye from '../assets/hide-eye.svg';


export default function FormVigenere(): ReactElement {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const messages = formData.get('messages') as string; 
        const password = formData.get('password') as string;
        const action = (form.activeElement as HTMLButtonElement).value;
        
        if (action === 'encrypt') {
            console.log('Encrypting...');
        } else {
            console.log('Original message...');
        }
    }
    
    return (
        <>
            <form>
                <div className="mb-4">
                    <textarea 
                        name="messages"
                        className="border-1 border-white p-2 w-full h-30"
                        placeholder="Original or encrypted message">
                    </textarea>
                </div>
                <div className="mb-4">
                    <input 
                        type="text"
                        name="password"
                        className="border-1 border-white p-2 w-full"
                        placeholder="password">
                    </input>
                </div>
                <div className="mb-4 flex gap-4">
                    <button type="submit" 
                        value="encrypt" 
                        className="w-1/2 flex items-center justify-center">
                            <span>Encrypt </span>
                            <img src={HideEye} alt="hide eye" className="w-4 h-4"></img>
                    </button>
                    <button type="submit" 
                        value="original" 
                        className="w-1/2 flex items-center justify-center">
                            <span>Original </span>
                            <img src={ShowEye} alt="show eye" className="w-4 h-4"></img>
                    </button>                    
                </div>
            </form>
        </>
    );
}

