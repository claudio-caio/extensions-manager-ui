import Toggle from 'rsuite/Toggle';
import 'rsuite/Toggle/styles/index.css';
import { Button } from "../button";

export const Card = ({ logo, name, description, isActive, extensions, setExtensions }) => {

    const onToggle = () => {

        const currentExtension = extensions.filter(extension => extension.name === name)[0];

        const updataExtension = { ...currentExtension, isActive: !currentExtension.isActive }

        const newExtension = extensions.map(extension => {
            if (extension.name === name) {
                extension = { ...updataExtension }
            }
            return extension
        })

        setExtensions(newExtension);

    }

    const onRemove = () => {
        const filteredExtension = extensions.filter(extension => extension.name !== name);
        setExtensions(filteredExtension);
    }

    return (
        <div
            className="
        bg-Neutral-0 
        
        rounded-lg 
        p-4 
        shadow-sm 
        dark:bg-Neutral-800
        ">

            <div className='flex gap-4 items-start mb-10'>
                <img src={logo} alt="Logo" />
                <div className=''>
                    <h2 className='text-[1.25rem] font-bold mb-2 dark:text-Neutral-0'>{name}</h2>
                    <p className='text-neutral-600 text-[.9375rem] dark:text-Neutral-300'>{description}</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <Button handleClick={onRemove} textSmall>Remove</Button>
                <Toggle onClick={onToggle} checked={isActive} color='red' />
            </div>

        </div>
    );
}

