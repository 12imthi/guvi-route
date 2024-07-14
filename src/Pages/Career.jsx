import CareerCard from "../Cards/CareerCard"
const Career = () => {
  const items = [
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img:' https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
]
return (
    <div className="container">
        <div className="row top-margin ">
            {
                items.map(item =>{
                    return <CareerCard item={item}/>
                })
            }
        </div>
    </div>
)
}

export default Career