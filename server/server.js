const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());
app.use(express.json());

function newPart(id, name, str, spd, def, cha, fac) {
    if (parts.find(part => part.id === id)) {
        return { error: "ID already exists" }
    }
    return { id, name, str, spd, def, cha, fac }
}
let parts = []
parts.push(newPart("MKH", "Monkey Head", 2, 1, 1, 0, "Terrestrial"))
parts.push(newPart("MDH", "Medusa Head", 0, 0, 1, 3, "Fantastical"))
parts.push(newPart("DLH", "Dolphin Head", 0, 3, 0, 1, "Aquatic"))
parts.push(newPart("CMH", "Computer Monitor (Head)", 1, -1, 2, 1, "Inorganic"))

parts.push(newPart("HMB", "Human Body", 1, 1, 2, 2, "Terrestrial"))
parts.push(newPart("LNB", "Lion Body", 3, 2, 0, 1, "Terrestrial"))
parts.push(newPart("RBB", "Robotic body", 2, -1, 5, 0, "Inorganic"))
parts.push(newPart("RHB", "Rhino Body", 1, 0, 3, 2, "Terrestrial"))
parts.push(newPart("GHB", "Ghost", 1, 3, 3, -1, "Fantastical"))
parts.push(newPart("CRB", "Car", 0, 3, 4, -1, "Inorganic"))
parts.push(newPart("MHB", "Muscular Human Body", 2, 2, 1, 1, "Terrestrial"))

parts.push(newPart("SMA", "Stickman Arm", -1, 4, 0, 1, "Inorganic"))
parts.push(newPart("PNA", "Pan", 3, 0, 2, -1, "Inorganic"))
parts.push(newPart("BEA", "Beholder Eye-Tentacle (Arms)", 1, 1, 0, 2, "Fantastical"))
parts.push(newPart("MCA", "Mech Arms", 3, -1, 2, 0, "Inorganic"))
parts.push(newPart("OCA", "Octopus Arms", 1, -1, 2, 2, "Aquatic"))

parts.push(newPart("HML", "Human Legs", 1, 1, 1, 1, "Terrestrial"))
parts.push(newPart("CHL", "Chicken Legs", 1, 2, 1, -1, "Terrestrial"))
parts.push(newPart("SPL", "Spider Legs*", 1, 1, 2, 0, "Terrestrial"))
parts.push(newPart("HOL", "Horse Legs", 2, 2, 0, 0, "Terrestrial"))
parts.push(newPart("BFL", "Basic Fins", 0, 1, 1, 0, "Aquatic"))
parts.push(newPart("DFL", "Dorsal Fins", 0, 1, 1, 1, "Aquatic"))
parts.push(newPart("PFL", "Pelvic Fins", 0, 3, 1, 0, "Aquatic"))
parts.push(newPart("WHL", "Wheels", 2, 3, 0, -1, "Inorganic"))

parts.push(newPart("DTS", "Dragon Tail", 2, 0, 1, 1, "Fantastical"))
parts.push(newPart("FTS", "Fox Tail", 0, 2, 0, 2, "Terrestrial"))
parts.push(newPart("MTS", "Mermaid Tail", 1, 0, -1, 4, "Fantastical"))
parts.push(newPart("CES", "Cheetah Ears", 0, 1, 2, 1, "Terrestrial"))
parts.push(newPart("PTS", "Peacock tail", 0, 0, 0, 4, "Terrestrial"))
parts.push(newPart("SLS", "Scales", 1, 1, 2, 0, "Terrestrial"))
parts.push(newPart("JKS", "Jetpack", 1, 4, -1, 0, "Inorganic"))

let players = [[], [], [], []]
let buffs = [[], [], [], []]

function getStats(player) {
    let str = 0, spd = 0, def = 0, cha = 0
    players[player - 1].forEach(part => {
        str += part.str
        spd += part.spd
        def += part.def
        cha += part.cha
    })
    return { str, spd, def, cha }
}

function addBuff(player, stat, buff, duration) {
    buffs[player - 1].push({ stat, buff, duration });
}

function getBuffs(player) {
    let str = 0, spd = 0, def = 0, cha = 0
    buffs[player - 1].forEach(buff => {
        switch (buff.stat) {
            case "str":
                str += buff.buff
                break
            case "spd":
                spd += buff.buff
                break
            case "def":
                def += buff.buff
                break
            case "cha":
                cha += buff.buff
                break
        }
    })
    return { str, spd, def, cha }
}

function useBuff(player) {
    buffs[player - 1].forEach(buff => {
        buff.duration--
    })
    buffs[player - 1] = buffs[player - 1].filter(buff => buff.duration > 0)
}

app.post("/api/reset", (req, res) => {
    players = [[], [], [], []]
    buffs = [[], [], [], []]
    res.status(200).send("Reset successful!")
})

app.get("/api/view/:player", (req, res) => {
    const player = req.params.player
    if (player < 1 || player > 4) {
        res.status(400).send("Invalid player number!")
    } else {
        res.status(200).send({ parts: players[player - 1], stats: getStats(player), buffs: getBuffs(player) })
    }
})

app.post("/api/add/:player/:part", (req, res) => {
    const player = req.params.player
    const part = req.params.part
    if (player < 1 || player > 4) {
        res.status(400).send("Invalid player number!")
    } else {
        const partObj = parts.find(p => p.id === part)
        if (!partObj) {
            res.status(400).send("Invalid part ID!")
        } else {
            players[player - 1].push(partObj)
            res.status(200).send("Part added!")
        }
    }
});

app.delete("/api/remove/:player/:part", (req, res) => {
    const player = req.params.player
    const part = req.params.part
    if (player < 1 || player > 4) {
        res.status(400).send("Invalid player number!")
    } else {
        const partObj = parts.find(p => p.id === part)
        if (!partObj) {
            res.status(400).send("Invalid part ID!")
        } else {
            const index = players[player - 1].findIndex(p => p.id === part)
            if (index === -1) {
                res.status(400).send("Part not found!")
            } else {
                players[player - 1].splice(index, 1)
                res.status(200).send("Part removed!")
            }
        }
    }
});

app.post("/api/buff/:player/:stat/:buff/:duration", (req, res) => {
    const player = req.params.player
    const stat = req.params.stat
    const buff = parseInt(req.params.buff)
    const duration = parseInt(req.params.duration)
    if (player < 1 || player > 4) {
        res.status(400).send("Invalid player number!")
    } else if (stat !== "str" && stat !== "spd" && stat !== "def" && stat !== "cha") {
        res.status(400).send("Invalid stat!")
    } else if (isNaN(buff) || isNaN(duration)) {
        res.status(400).send("Buff and duration must be numbers!")
    } else {
        addBuff(player, stat, buff, duration)
        res.status(200).send("Buff added!")
    }
});

app.post("/api/battle/:player1/:player2", (req, res) => {
    const player1 = req.params.player1
    const player2 = req.params.player2
    if (player1 < 1 || player1 > 4 || player2 < 1 || player2 > 4) {
        res.status(400).send("Invalid player number!")
    } else {
        const stats1 = getStats(player1)
        const stats2 = getStats(player2)
        const buffs1 = getBuffs(player1)
        const buffs2 = getBuffs(player2)
        const total1 = { str: stats1.str + buffs1.str, spd: stats1.spd + buffs1.spd, def: stats1.def + buffs1.def, cha: stats1.cha + buffs1.cha }
        const total2 = { str: stats2.str + buffs2.str, spd: stats2.spd + buffs2.spd, def: stats2.def + buffs2.def, cha: stats2.cha + buffs2.cha }
        const result = { player1: total1, player2: total2 }
        useBuff(player1)
        useBuff(player2)
        res.status(200).send(result)
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
