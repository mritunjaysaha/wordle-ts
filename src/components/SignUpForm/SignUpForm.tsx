import type { Dispatch, FC, SetStateAction } from 'react';

import type { FormTimelineStates } from '../../types/FormTimelineStates';

type SignUpFormProps = {
    formTimelineState: FormTimelineStates;
    setFormTimelineState: Dispatch<SetStateAction<FormTimelineStates>>;
};

export const SignUpForm: FC<SignUpFormProps> = ({ formTimelineState, setFormTimelineState }) => {
    return (
        <form>
            {formTimelineState === 'email' && (
                <>
                    <div className='form-input-container'>
                        <label htmlFor='email' className='form-label'>
                            What&apos;s your email?
                        </label>
                        <input
                            id='email'
                            className='form-input'
                            placeholder='Enter your email address'
                        />
                    </div>
                    <button
                        type='button'
                        onClick={() => {
                            setFormTimelineState('info');
                        }}
                        className='form-button'
                    >
                        Next
                    </button>
                </>
            )}
            {formTimelineState === 'info' && (
                <>
                    <div className='flex justify-between gap-10'>
                        <div className='form-input-container'>
                            <label htmlFor='first-name' className='form-label'>
                                First Name
                            </label>
                            <input id='first-name' className='form-input' placeholder='John' />
                        </div>
                        <div className='form-input-container'>
                            <label htmlFor='last-name' className='form-label'>
                                Last Name
                            </label>
                            <input id='last-name' className='form-input' placeholder='Doe' />
                        </div>
                    </div>
                    <button
                        type='button'
                        onClick={() => {
                            setFormTimelineState('password');
                        }}
                        className='form-button'
                    >
                        Next
                    </button>
                </>
            )}
            {formTimelineState === 'password' && (
                <>
                    <div className='form-input-container'>
                        <label htmlFor='password' className='form-label'>
                            Enter a password
                        </label>
                        <input id='password' className='form-input' placeholder='*************' />
                    </div>
                    <button className='form-button'>Submit</button>
                </>
            )}
        </form>
    );
};
