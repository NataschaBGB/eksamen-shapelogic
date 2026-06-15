import './employees.sass';


export default function Employees() {

    return (
        <section className="employees">
            <div className="container">
                <h2>Vores medarbejdere</h2>
                <div className="employees__list">
                    <div className="employee">
                        <img src="/shapelogic/employee1.jpg" alt="Medarbejder 1" className="employee-image" />
                        <h3>Medarbejder 1</h3>
                        <p>Position: Softwareudvikler</p>
                    </div>
                    <div className="employee">
                        <img src="/shapelogic/employee2.jpg" alt="Medarbejder 2" className="employee-image" />

                        <h3>Medarbejder 2</h3>
                        <p>Position: Grafisk Designer</p>
                    </div>
                    </div>
            </div>
        </section>
    );

}