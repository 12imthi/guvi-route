import FullStackCard from "../Cards/FullStackCard"
const FullStack = () => {
    const items = [
        {
            heading1: 'Top Digital Marketing Trends for 2024',
            heading2: 'Top Digital Marketing Trends for 2024',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp',
            footer: '1 February 2024 . No Comments',
            read : 'READ MORE >>',
        },
        {
            heading1: 'Top Digital Marketing Trends for 2024',
            heading2: 'Top Digital Marketing Trends for 2024',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp',
            footer: '1 February 2024 . No Comments',
            read : 'READ MORE >>',
        },
        {
            heading1: 'Top Digital Marketing Trends for 2024',
            heading2: 'Top Digital Marketing Trends for 2024',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp',
            footer: '1 February 2024 . No Comments',
            read : 'READ MORE >>',
        },
        {
            heading1: 'Top Digital Marketing Trends for 2024',
            heading2: 'Top Digital Marketing Trends for 2024',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp',
            footer: '1 February 2024 . No Comments',
            read : 'READ MORE >>',
        },
        {
            heading1: 'Top Digital Marketing Trends for 2024',
            heading2: 'Top Digital Marketing Trends for 2024',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp',
            footer: '1 February 2024 . No Comments',
            read : 'READ MORE >>',
        },
        {
            heading1: 'Top Digital Marketing Trends for 2024',
            heading2: 'Top Digital Marketing Trends for 2024',
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp',
            footer: '1 February 2024 . No Comments',
            read : 'READ MORE >>',
        },
    ]
    return (
        <div className="container">
            <div className="row top-margin ">
                {
                    items.map(item =>{
                        return <FullStackCard item={item}/>
                    })
                }
            </div>
        </div>
    )
}

export default FullStack