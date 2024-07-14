import CyberSecurityCard from "../Cards/CyberSecurityCard"
const CyberSecurity = () => {
  const items = [
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Digital-Marketing-Trends.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
]
return (
    <div className="container">
        <div className="row top-margin ">
            {
                items.map(item =>{
                    return <CyberSecurityCard  item={item}/>
                })
            }
        </div>
    </div>
)
}

export default CyberSecurity