import { ReactElement } from "react";

function FormVigenere(): ReactElement {
    return (
        <>
            <form>
                <div className="mb-4">
                    <textarea 
                        name="messages"
                        className='border-1 border-white p-2 w-full h-30'
                        placeholder="Original or encrypted message">
                    </textarea>
                </div>
                <div className="mb-4">
                    <input 
                        type="text"
                        name="password"
                        className='border-1 border-white p-2 w-full'
                        placeholder="password">
                    </input>
                </div>
                <div className="mb-4 flex gap-4">
                    <button type="submit" 
                        value="original" 
                        className='w-1/2 flex items-center justify-center'>
                            Original
                    </button>
                    <button type="submit" 
                        value="encrypt" 
                        className='w-1/2 flex items-center justify-center'>
                            Encrypt
                    </button>
                </div>
            </form>
        </>

    );
}