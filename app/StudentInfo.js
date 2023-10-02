import Link from "next/link";

const StudentInfo = () => {
    const name = "Bella T";
    const course = "CPRG 306 A";
    const url = "https://github.com/btleaf-t/cprg306-assignments";

    return (
        <div>
            <h1>{course}</h1>
            <p>{name}</p>
            <Link href = {url}>My GitHub Repo Link</Link>
        </div>
    );
};

export default StudentInfo;