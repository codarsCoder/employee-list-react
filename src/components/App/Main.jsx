
const Main = ({ employeeList }) => {


    return (

        <div className="main">
            {employeeList.map((item, i) => {

                return (

                    <div key={i} className="emp-wrapper">
                        <div className="img"><img src={item.image} alt="" /></div>
                        <div className="emp-detail">
                            <h3>{item.name}</h3>
                            <p>{item.age}</p>
                            <p><a href={"mailto:"+item.email}></a>{item.email}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    )

}

export default Main