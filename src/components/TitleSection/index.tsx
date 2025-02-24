interface TitleSectionProps {
    title: string
    position?: 'center' | 'right',
    dataAos?: string
    dataAosOffset?: string
    dataAosOnce?: boolean
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, position, dataAos, dataAosOffset = "0", dataAosOnce = true }) => {
    return (
        <>
            <h2 className={`text-2xl text-title font-bold ${position === 'center' ? 'text-center' : ''} ${position === 'right' ? 'text-right' : ''}`} data-aos={dataAos} data-aos-offset={dataAosOffset} data-aos-once={dataAosOnce}>
                {title}
            </h2>
        </>
    )
}

export default TitleSection