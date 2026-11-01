import { describe, expect, it } from "vitest";
import { admissionSchema, normalizeUzPhone } from "@/lib/admission";

describe("admission form rules", () => {
  it("accepts grades 1 through 11 only", () => {
    const base = { name: "Ali", phone: "+998 99 242 42 12", track: "IT" };
    expect(admissionSchema.safeParse({ ...base, grade: "1" }).success).toBe(true);
    expect(admissionSchema.safeParse({ ...base, grade: "11" }).success).toBe(true);
    expect(admissionSchema.safeParse({ ...base, grade: "12" }).success).toBe(false);
    expect(admissionSchema.safeParse({ ...base, grade: "" }).success).toBe(false);
  });

  it("requires an Uzbek number: +998 followed by 9 digits", () => {
    expect(normalizeUzPhone("+998 99 242 42 12")).toBe("+998992424212");
    const ok = admissionSchema.safeParse({ name: "Ali", phone: "99 252 42 12", grade: "5", track: "IT" });
    expect(ok.success && ok.data.phone).toBe("+998992524212");
    expect(admissionSchema.safeParse({ name: "Ali", phone: "+998 99 242", grade: "5", track: "IT" }).success).toBe(false);
  });

  it("requires a track: Meditsina, IT or Biznes", () => {
    const base = { name: "Ali", phone: "+998 99 242 42 12", grade: "9" };
    for (const t of ["Meditsina", "IT", "Biznes"]) expect(admissionSchema.safeParse({ ...base, track: t }).success).toBe(true);
    expect(admissionSchema.safeParse({ ...base, track: "Yuridik" }).success).toBe(false);
    expect(admissionSchema.safeParse({ ...base, track: "" }).success).toBe(false);
  });
});
