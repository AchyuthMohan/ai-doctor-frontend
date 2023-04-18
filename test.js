const input = [
    "Abdominal guarding (s_1558)",
    "Abdominal mass (s_299)",
    "Abdominal pain (s_13)",
    "Abdominal pain, below belly button (s_1598)",
    "Abdominal pain, burning or gnawing (s_1802)",
    "Abdominal pain, colicky (s_1848)",
    "Abdominal pain, crampy (s_1860)",
    "Abdominal pain, diffuse (s_1557)",
    "Abdominal pain, epigastric (s_1387)",
    "Abdominal pain, exacerbating after caffeine consumption (s_1207)",
    "Abdominal pain, exacerbating during coughing or movement (s_15)",
    "Abdominal pain, exacerbating during deep breath (s_1202)",
    "Abdominal pain, exacerbating on an empty stomach (s_14)",
    "Abdominal pain, gradual onset (s_1844)",
    "Abdominal pain, lasting 2 to 7 days (s_1852)",
    "Abdominal pain, lasting 8 to 14 days (s_1853)",
    "Abdominal pain, lasting less than 2 days (s_1840)",
    "Abdominal pain, lasting more than 2 weeks (s_1842)",
    "Abdominal pain, left lower quadrant (s_1729)",
    "Abdominal pain, left side (s_1854)",
    "Abdominal pain, left upper quadrant (s_1591)",
    "Abdominal pain, localised (s_2275)",
    "Abdominal pain, midcycle (s_1859)",
    "Abdominal pain, migrating to the right lower quadrant (s_1851)",
    "Abdominal pain, mild (s_1782)",
    "Abdominal pain, moderate (s_1783)",
    "Abdominal pain, no exacerbation factor (s_2311)",
    "Abdominal pain, periumbilical (s_1532)",
    "Abdominal pain, postprandial (s_16)",
    "Abdominal pain, premenstrual (s_17)",
    "Abdominal pain, radiating to left shoulder or shoulder blade (s_1845)",
    "Abdominal pain, radiating to lower or middle part of the back (s_1846)",
    "Abdominal pain, radiating to right shoulder or shoulder blade (s_471)",
    "Abdominal pain, recurrent (s_1847)",
    "Abdominal pain, reduced by defecation or relieving flatulence (s_57)",
    "Abdominal pain, right lower quadrant (s_1531)",
    "Abdominal pain, right side (s_1855)",
    "Abdominal pain, right upper quadrant (s_1528)",
    "Abdominal pain, severe (s_1195)",
    "Abdominal pain, sharp and stabbing (s_1369)",
    "Abdominal pain, sudden onset (s_1843)",
    "Abdominal pain, unbearable (s_1929)",
    "Abdominal pain, unknown character (s_2288)",
    "Abdominal pain, unknown onset (s_2558)",
    "Abdominal pain, unspecified location (s_2281)",
    "Abdominal tenderness (s_1514)",
  ];
  
  const output = input.map(str => {
    const [name, id] = str.split(' (');
    return {
      id: id.replace(')', ''),
      name: name,
      choice_id: 'present'
    };
  });
  
  console.log(output);