import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Copyrights from "./Copyrights";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario />
            <Sugestoes />
            <Copyrights />
        </div>
    );
}