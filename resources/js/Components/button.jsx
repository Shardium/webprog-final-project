export default function Button({
    children,
    onClick,
    className = '',
    disabled = false,
    type = 'button',
    variant = 'primary',
    size = 'full',
    ...props
}) {
    const baseStyles = 'w-auto font-poppins py-2 text-base text-md rounded-sm transition-colors'

    const variants = {
        primary: 'bg-white text-black hover:bg-gray-300',
        secondary: 'bg-[#087592] text-white hover:bg-[#0B6881]',
    }

    const sizes = {
        'not-full': 'w-auto',
        'full': 'w-full px-6',
    }

    const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
    return (
        <button
            type = {type}
            onClick={onClick}
            disabled = {disabled}
            className={finalClassName}
            {...props}
        >
            {children}
        </button>
    )
}