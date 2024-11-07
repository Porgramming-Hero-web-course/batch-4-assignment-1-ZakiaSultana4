
{

    type TUserProfile =
        {
            name: string,
            age: number,
            email: string
        }

    function updateProfile(profile: TUserProfile, updates: Partial<TUserProfile>): TUserProfile {
        return { ...profile, ...updates }
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, { age: 26 }));
}