import React from "react"
import "./Demo.css"
import { DEMO } from "../../config/cstModule"
import Announcement from "../announcement/Announcement"
import DemoSearch from "./DemoSearch"
import DemoCard from "./DemoCard"


function Demo() {
    return (
        <div id={DEMO.KEY} className={DEMO.KEY}>
            <div className="demo-container">
                <div className="demo-north">
                    <Announcement/>
                    <div className="demo-north-picture">
                        tupian
                    </div>
                </div>
                <div className="demo-south">
                    <DemoSearch/>
                    <div className="demo-card-wrap">
                        <DemoCard desc={"猫（学名：Felis silvestris catus），通常指家猫，为小型猫科动物，是为野猫（又称斑猫；Felis silvestris）中的亚种[1]，此外也有其他未经过《国际动物命名法规》认可的命名，例如Felis catus。"}/>
                        <DemoCard desc={"根据遗传学及考古学分析，人类驯养猫的纪录可追溯至10,000年前的肥沃月湾地区，古埃及人饲养猫的纪录可追溯至3,600年前，目的可能为捕鼠及其他啮齿目动物，以防止它们吃掉谷物。[2]现在，猫成为世界上最为广泛的宠物之一，饲养率仅次于犬（或称狗），但同时也是危害十分广泛的外来种，由于猎捕的习惯，威胁着很多原生鸟类、啮齿类的生存。"}/>
                        <DemoCard desc={"小部分地方文化在过去亦有食用猫肉的习俗，如越南、中国广东等地，但现今大部分地区因卫生防疫，或是以猫为宠物等因素而禁止食用猫肉。"}/>
                        <DemoCard desc={"猫（学名：Felis silvestris catus），通常指家猫，为小型猫科动物，是为野猫（又称斑猫；Felis silvestris）中的亚种[1]，此外也有其他未经过《国际动物命名法规》认可的命名，例如Felis catus。根据遗传学及考古学分析，人类驯养猫的纪录可追溯至10,000年前的肥沃月湾地区，古埃及人饲养猫的纪录可追溯至3,600年前，目的可能为捕鼠及其他啮齿目动物，以防止它们吃掉谷物。[2][3]（等于人类168岁，来自美国德州）。小部分地方文化在过去亦有食用猫肉的习俗，如越南、中国广东等地，但现今大部分地区因卫生防疫，或是以猫为宠物等因素而禁止食用猫肉。"}/>
                        <DemoCard desc={"更直接的风险是因狩猎而感染野外病菌的猫，会引入例如狂犬病等进入人类生活圈，因此对饲主知识技术与社会责任要求也较高，先进国家的公卫系统普遍会针对野猫进行抓捕绝育，管理意义即在于此。长期饲育的猫平均寿命为12年以上（相当于人类64岁），历史上最长寿的猫则达38岁[3]（等于人类168岁，来自美国德州）。小部分地方文化在过去亦有食用猫肉的习俗，如越南、中国广东等地，但现今大部分地区因卫生防疫，或是以猫为宠物等因素而禁止食用猫肉。"}/>
                        <DemoCard desc={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}/>
                        <DemoCard desc={"ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"}/>
                    </div>
                    <div className="demo-card-more-card">
                        ↓更多样例↓
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo