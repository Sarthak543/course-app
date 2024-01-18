import React, { useEffect } from 'react'
import { Button, Container } from "reactstrap"

export default function () {

    useEffect(() => {
        document.title="Home"
    }, []);

    return (
        <div>

            <div className="text-center">
                <div class="container-fluid bg-light text-dark p-4">
                    <div class="container bg-light p-2">
                        <h1 class="display-5 fw-bold">Welcome to Course Application</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quis enim eum voluptatum dolore aperiam maiores unde placeat sit est!
                        </p>
                        <Container>
                            <Button color='success' outline>Start using Application</Button>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}
